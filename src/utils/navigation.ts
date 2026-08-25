export function navigateTo(url: string) {
  if (url.startsWith("#") && window.location.pathname !== "/") {
    window.location.href = `/${url}`;
  } else if (url.startsWith("#")) {
    document.querySelector(url)?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = url;
  }
}

export function downloadFile(url: string, fileName: string) {
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}
