import fakeApi from '@/lib/fakeApi'

const generateUid = () => Math.floor(new Date () * Math.random())

export const fetchActivities = () => {
  return fakeApi.get('activities')
}

export const fetchCategories = () => {
  return fakeApi.get('categories')
}

export const fetchUser = () => {
  return {
    name: 'Filip Jerga',
    id: '-Aj34jknvncx98812',
  }
}

export const createActivityAPI = (activity) => {
activity.id = generateUid()
activity.progress = 0
activity.createdAt = new Date()
activity.updatedAt = new Date()

return new Promise((resolve, reject) => {
  resolve(activity)
})
}




// ***********Trasladamos esto a fakeApi*****
// const activities = {
//   '1546968934': {
//     id: '1546968934',
//     title: 'Learn Vue.js',
//     notes: 'I started today and it was not good.',
//     progress: 0,
//     category: '1546969049',
//     createdAt: 1546969144391,
//     updatedAt: 1546969144391
//   },
//   '1546969212': {
//     id: '1546969212',
//     title: 'Read Witcher Books',
//     notes: 'These books are super nice',
//     progress: 70,
//     category: '1546969049',
//     createdAt: 1546969144391,
//     updatedAt: 1546969144391
//   }
// }

// const canContinue = () => {
// const rndNumber = Math.floor(Math.random() * 10)
// if (rndNumber > 5) {
//   return true
//   } 
//   return false
// }

