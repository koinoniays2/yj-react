const PurpleBox = ({children}) => {
    return(
        <div className="flex max-w-[700px] w-full h-[300px] mt-[30px] bg-purple-300">
            {children}
        </div>
    );
};
export default PurpleBox;