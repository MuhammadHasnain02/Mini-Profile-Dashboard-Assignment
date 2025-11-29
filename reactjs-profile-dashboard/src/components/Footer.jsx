

function Footer() {
    

    return (
    <footer className="fixed bottom-0 flex flex-row items-center justify-between w-full px-10 py-3 text-gray-500 bg-gray-50 backdrop-blur-lg text-center text-[15px] border-t border-gray-300">
        
        <p className="">© 2025 Post Handler | All rights reserved</p>
        <div className="flex gap-4 mt-2">
            <a target="_blank" href="https://www.facebook.com" className="hover:text-white text-[21px]">
                <i className="fa-brands fa-facebook"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com" className="hover:text-white text-[21px]">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a target="_blank" href="https://x.com" className="hover:text-white text-[21px]">
                <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a target="_blank" href="https://www.youtube.com" className="hover:text-white text-[21px]">
                <i className="fa-brands fa-youtube"></i>
            </a>
        </div>
        
    </footer>
    )

}


export default Footer