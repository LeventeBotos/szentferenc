import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
   name: "Assisi Szent Ferenc",
  short_name: "Assisi Szent Ferenc",
  background_color: "#ffffff",
  theme_color: "#ffffff",
  display: "fullscreen",
  scope: "/",
  start_url: "/",
  icons: [
    {
      "src": "/next.svg",
      "type": "image/svg",
      "sizes": "512x512"
    }
  ]}
}