const enhancer = require('./enhancer.js');
// test away!


describe('enhancer.js', () => {
    describe('repair()', () => {
        it('can restore durability back to 100', () => {
            const actual = {name: "hello", enhancement: 20, durability: 99}
            const expected= {name: "hello", enhancement: 20, durability: 100}
            
            expect(enhancer.repair(actual)).toMatchObject(expected)
        })
    })
    describe('succeed()', () => {
        it('gives +1 to enhancement till max level', () => {
            const actual = {name: "hello", enhancement: 18, durability: 100}
            const actualOne= {name: "hello", enhancement: 20, durability: 100}

            const expected= {name: "hello", enhancement: 19, durability: 100}
            const expectedOne= {name: "hello", enhancement: 20, durability: 100}

            expect(enhancer.succeed(actual)).toMatchObject(expected)
            expect(enhancer.succeed(actualOne)).toMatchObject(expectedOne)
        })
    });
    describe('fail()', () => {
        it('decreases durability by 5 if enhancement is less than 15, decreases durability by 10 if enhancement is greater than 15, -1 to enhancement if its more than 16', () => {
            const actualAxe = {name: "axe", enhancement: 14, durability: 100}
            const expectedAxe= {name: "axe", enhancement: 14, durability: 95}
            const actualBow = {name: 'bow', enhancement: 18 , durability: 90}
            const expectedBow= {name: "bow", enhancement: 17, durability: 90}
            const actualGun = {name: 'gun', enhancement: 17 , durability: 90}
            const expectedGun= {name: "gun", enhancement: 16, durability: 90}


            expect(enhancer.fail(actualAxe)).toMatchObject(expectedAxe)
            expect(enhancer.fail(actualBow)).toMatchObject(expectedBow)
            expect(enhancer.fail(actualGun)).toMatchObject(expectedGun)
        })

    })


    
})