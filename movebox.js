class AnimateMe {
    moveToLeft = document.querySelectorAll('[data-left]')
    moveToRight = document.querySelectorAll('[data-right]')
    leftOffset = 0
    rightOffset=0
    setint = ""

    // callback constructor for Intersection Observer
    constructor() { 
        this.callback()
    }
    
    callback(){
        let option = { root: null, roortMargin: '0px', threshold:[0.5, 1]}

        let call = (entries, observer)=>{
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    // Iteratting over all element with the set custom attribute
                    this.moveToLeft.forEach(moveleft=>{
                        moveleft.style.transform = "translateX(100px)"
                        moveleft.style.transition= "transform 1s ease-in 0.0s"
                    })

                    this.moveToRight.forEach(moveright=>{
                        moveright.style.transform = "translateX(-100px)"
                        moveright.style.transition= "transform 1s ease-in 0.0s"
                    })
                    
                }else{
                    this.moveToLeft.forEach(moveleft=>{
                        moveleft.style.transform = "translateX(0px)";
                        moveleft.style.transition="transform 0.5s ease-in 0.0s"
                    })
                    this.moveToRight.forEach(moveright=>{
                        moveright.style.transform = "translateX(0px)"
                        moveright.style.transition="transform 0.5s ease-in 0.0s"
                    })

                }
                
            });
        }
        let observer = new IntersectionObserver(call, option) 
        this.moveToLeft.forEach(moveleft=>{
            observer.observe(moveleft)
        })
        this.moveToRight.forEach(moveright=>{
            observer.observe(moveright) 
        })
    }

}



let animateme = new AnimateMe();
