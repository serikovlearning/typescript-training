import React from 'react'

import { ModelHandler } from '@/lib/model'

const handler = new ModelHandler()
const result = handler.getData({
    moduleBrandName: 'esp_32_wrower',
    moduleVersionsArray: []
})

export const Types = () => {
    console.log(result)
	return <div>Types module, check console</div>
}
