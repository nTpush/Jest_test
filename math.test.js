import { add, getData } from './math'
import axios from 'axios'
jest.mock('axios')


import { getChangedFilesForRoots, findRepos } from 'jest-changed-files'
getChangedFilesForRoots(['./'], { lastCommit: true }).then((result) => {
    console.log(result.changedFiles)
    console.log(result.repos)
})






// describe('哈哈分个组', ()=> {

//   test('测试加法3+7', () => {
//     expect(add(3,7)).toBe(110)
//   })

//   test('测试异常数据', ()=> {

//     return getData().then(res => {
//       expect(res.data).toHaveProperty('message', '操作成功')
//     })
//   })

//   test('async await', async () => {
//     axios.post.mockResolvedValue({data: 'hello'})
//     await getData().then((data) => {
//       expect(data.data).toBe('hello')
//     })
//   })
// })
