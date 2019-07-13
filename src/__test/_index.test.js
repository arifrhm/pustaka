import * as KalenderJawa from '../index.js'

describe('Async Testing', () => {
    test("cariHariAwalBulan", async () => {
        const x = await KalenderJawa.cariHariAwalBulan('romadon', 1952)
        expect(x.kH).toEqual({ dino: 'senen', urutan: 1 })
        expect(x.kP).toEqual({ pasaran: 'legi', neptu: 5, urutan: 1 })
    })
})
