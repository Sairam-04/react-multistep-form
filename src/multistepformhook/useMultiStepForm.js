import { useState } from "react";

export function useMultiStepForm(steps){
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next(){
    setCurrentStepIndex(i=>{
      if (i>= steps.length-1) return i
      return i+1;
    })
  }

  function back(){
    setCurrentStepIndex(i=>{
      if(i<=0) return i;
      return i-1;
    })

  }

  function goTo(index){
    setCurrentStepIndex(index)
  }


  return{
    currentStepIndex,
    steps,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex !==0,
    isSecondStep: currentStepIndex !==1,
    isLastStep: currentStepIndex === steps.length-1,
    goTo,
    next,
    back,
    

  }
}


