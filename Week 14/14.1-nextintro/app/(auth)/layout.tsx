export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-b text-center text-white bg-slate-800">
        20% off Signup now
      </div>
      {children}
    </div>
  );
}
