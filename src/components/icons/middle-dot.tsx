export const MiddleDot = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        width="24" 
        height="24" 
        viewBox="0 0 204 204" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M102 204C158.333 204 204 158.333 204 102C204 45.667 158.333 0 102 0C45.667 0 0 45.667 0 102C0 158.333 45.667 204 102 204Z" fill="white"></path>
        <g className="pin">
            <path fillRule="evenodd" clipRule="evenodd" d="M102 166C102 166 153 139.4 153 102C153 73.8335 130.167 51 102 51C73.8335 51 51 73.8335 51 102C51 139.4 102 166 102 166Z" fill="black"></path>
            <circle cx="102" cy="102" r="24" fill="white"></circle>
        </g>
    </svg>
);
