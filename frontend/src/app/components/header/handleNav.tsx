type HandleNavProps = {
    to: string;
    children: React.ReactNode;
    className: string;
};

export function HandleNav({ to, children, className }: HandleNavProps) {
    const HandleClick = () => {
        const el = document.getElementById(to)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    };

    return (
        <a onClick={HandleClick} className={className} style={{ cursor: 'pointer' }}>
            {children}
        </a>
    );
}