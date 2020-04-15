const preloader = () => {
    document.querySelector('.preloader').classList.toggle('critical-case_disable')
    setTimeout(()=>{
        document.querySelector('.preloader').classList.toggle('critical-case_disable')
    }, 2000)
}
export default preloader;