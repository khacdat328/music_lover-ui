import { LeftSidebar, Header } from "~/components";
function MainLayout({children}) {
    return ( <div className="w-full flex">
        <LeftSidebar />
        <div>
            <Header /> 
            <div>
                {children}
            </div>
        </div>
    </div> );
}

export default MainLayout;