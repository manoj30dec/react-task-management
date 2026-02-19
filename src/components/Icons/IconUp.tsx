interface iInterface {
    width?: string;
    height?: string;
    color?: string;
    className?: string;
    onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  }
const IconUp: React.FC<iInterface> = ({ width = "24px", height = "24px", color = "black", className, onClick }) => {
    return (
      <>
        <svg
          fill={color}
          width={width}
          height={height}
          viewBox="0 0 24 24"
          className={className}
          onClick={onClick}
        >
          <path d="M21,21H3L12,3Z" />
        </svg>
      </>
    );
  };
  export default IconUp;