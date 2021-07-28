import { user } from './user/index.ts'
import cover from './1.jpg'
import def from './default-avatar.png'
import './css/user.less'
require('./css/index.less')

console.log('index working')
// console.log(asas)
const img = document.getElementById('img')
img.src = cover
const img1 = document.getElementById('img1')
img1.src = def

console.log(user.name, user.age)
console.log(BaseUrl)
