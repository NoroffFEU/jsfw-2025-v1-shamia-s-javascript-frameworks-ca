export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6 mt-10">
      <p className="text-sm">© {new Date().getFullYear()} NextCart</p>

      <p className="text-xs text-gray-400 mt-1">
        Built with Next.js & Tailwind
      </p>
    </footer>
  );
}
