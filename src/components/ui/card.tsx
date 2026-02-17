export function Card({ children }: any) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "12px",
        background: "#fff"
      }}
    >
      {children}
    </div>
  );
}
