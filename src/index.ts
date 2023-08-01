import { getUser } from './user/index'
import image1 from '@/assets/1.jpg'
import def from '@/assets/default-avatar.png'
import './css/index.less'

const img = document.getElementById('img') as HTMLImageElement
img.src = image1
const img1 = document.getElementById('img1') as HTMLImageElement
img1.src = def

console.log(getUser.name, getUser.age)
console.log(window.jty)
console.log(BaseUrl)
