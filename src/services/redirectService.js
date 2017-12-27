
class RedirectionService{

    redirect(path){
        window.location.assign(`/#${path}`);
    }
}
export default RedirectionService;