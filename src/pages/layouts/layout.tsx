
import Header from "@/pages/layouts/_header";


const Layout = ( props:any ) =>{
    return(
        <main>
            {props.children}
        </main>
    );
}

export default Layout;