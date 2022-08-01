import CardProfile from "../component/CardProfile";
import gochi from '../../assets/img/GOCHI.svg';
import { useEffect } from "react";
import { auth } from "../../firebase";
import { withRouter } from "react-router";
const UserProfile = (props) => {

    useEffect(() => {
        if (auth.currentUser) {
            console.log(auth.currentUser)
        } else {
            props.history.push('/login')
        }
    },[props.history])

    return ( 
        <div>
            <section className="shadow-sm py-5 p-md-5 mb-2 mt-2 rounded text-bg-secondary text-center container">
                <div className="row py-lg">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <img 
                            className="col-3 mw-100 rounded-circle"
                            src={gochi}
                            alt="Profile"
                            />
                        <h2 className="fw-light">Nombre Usuario</h2>
                        <p>
                            <a href="/userprofile" className="btn btn-primary mx-1">Cultivos</a>
                            <a href="/userprofile" className="btn btn-secondary mx-1">Cursos</a>
                        </p>
                    </div>
                </div>
            </section> 
            <hr />
            <div className="album py-2 bg-white">
                <div className="container">
                    <h2 className="text-center pb-2">Mis Cultivos</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        <CardProfile/>
                        <CardProfile/>
                        <CardProfile/>
                    </div>
                </div>
                <hr />
                <div className="container">
                    <h2 className="text-center pb-2">Mis Cursos</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <CardProfile/>
                        <CardProfile/>
                        <CardProfile/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default withRouter(UserProfile)