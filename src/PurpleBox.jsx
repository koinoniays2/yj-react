const PurpleBox = ({children}) => {
    return(
        <div className="m-[20px] flex max-w-[700px] w-full h-[300px] bg-purple-300">
            {children}
        </div>
    );
};
export default PurpleBox;