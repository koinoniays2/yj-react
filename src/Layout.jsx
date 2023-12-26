const Layout = ({children}) => {
    return (
        <div className="w-full h-full flex justify-center">
            <div className="max-w-[800px] w-full h-[800px] flex flex-col items-center justify-center bg-pink-200">
                {children}
            </div>
        </div>
    );
};

export default Layout;