import ArcadeImg from '../assets/images/icon-arcade.svg'
import AdvancedImg from '../assets/images/icon-advanced.svg'
import ProImg from '../assets/images/icon-pro.svg'

export const allPlans = [
    {name:"Arcade", mAmount:"9",  yAmount:"90", icon:ArcadeImg, yearDiscount:"2 months free", checked:false, duration:"" },
    {name:"Advanced", mAmount:"12",  yAmount:"120", icon:AdvancedImg, yearDiscount:"2 months free", checked:false, duration:"" },
    {name:"Pro", mAmount:"9",  yAmount:"150", icon:ProImg, yearDiscount:"2 months free", checked:false, duration:"" },
]

export const allSteps = [
  {step:1, name:"YOUR INFO"},
  {step:2, name:"SELECT PLAN"},
  {step:3, name:"ADD-ONS"},
  {step:4, name:"SUMMARY"},
]

export const allAddons = [
    {name:"Online Service", description:"Access to multiplayer games", mAmount:"1", yAmount:"10", selected:false},
    {name:"Larger storage", description:"Extra 1TB of cloud save", mAmount:"2", yAmount:"20", selected:false},
    {name:"Customizable Profile", description:"Custom theme on your profile", mAmount:"2", yAmount:"20", selected:false},
]

