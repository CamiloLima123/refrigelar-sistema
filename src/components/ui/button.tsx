export function Button({ children, ...props }: any) {
  return (
    <button
      style={{
        padding: "10px 16px",
        background: "#111",
        color: "#fff",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer"
      }}
      {...props}
    >
      {children}
    </button>
  );
}
