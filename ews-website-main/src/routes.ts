import { useEffect, useState } from "react";

export type Route = "home" | "facilities" | "authority" | "gallery" | "contact";

export const routes: { id: Route; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "facilities", label: "Facilities" },
  { id: "authority", label: "Bhawan Authority" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact Us" },
];

// Hash-based routing (#/facilities) so pages work on GitHub Pages without server rewrites
const readRoute = (): Route => {
  const id = window.location.hash.replace(/^#\/?/, "");
  return routes.some((r) => r.id === id) ? (id as Route) : "home";
};

export const routeHref = (id: Route) => (id === "home" ? "#/" : `#/${id}`);

export const useRoute = () => {
  const [route, setRoute] = useState<Route>(readRoute);

  useEffect(() => {
    const onChange = () => {
      setRoute(readRoute());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
};

// Resolves image paths from appContent.json ("/public/images/x.jpg") against the Vite base URL
export const resolvePublicUrl = (url: string) => {
  const normalized = url.startsWith("/public/") ? url.replace("/public/", "/") : url;
  return normalized.startsWith("/") && !normalized.startsWith(import.meta.env.BASE_URL)
    ? `${import.meta.env.BASE_URL}${normalized.slice(1)}`
    : normalized;
};
