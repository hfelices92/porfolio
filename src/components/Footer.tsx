export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center pb-6">
      <hr className="w-8/12 border-t border-slate-500 mb-2" />
      <p className="text-center text-slate-200">
        © {currentYear} - All Rights Reserved.
      </p>
    </div>
  );
}
