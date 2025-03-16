/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { MOCK } from './mock'

export interface Image {
	data: string
	size: number
}

const CamVersions = ['0.1', '0.2', '0.3'] as const
const WrowerVersions = ['1.1', '2.2', '3.3'] as const
const ThinkerVersions = ['X', 'V', 'L'] as const

const ModuleVersions = {
	esp_32_cam: CamVersions,
	esp_32_wrower: WrowerVersions,
	esp_ai_thinker: ThinkerVersions
} as const

type SupportedModules =
	| {
			moduleBrandName: 'esp_32_cam'
			moduleVersion: (typeof ModuleVersions)['esp_32_cam'][number]
			heapSize: number
	}
	| {
			moduleBrandName: 'esp_32_wrower'
			moduleVersion: (typeof ModuleVersions)['esp_32_wrower'][number]
			heapSize: number
	}
	| {
			moduleBrandName: 'esp_ai_thinker'
			moduleVersion: (typeof ModuleVersions)['esp_ai_thinker'][number]
			heapSize: number
	}

export type ModelBase = SupportedModules

export type Model =
	| ModelBase
	| (ModelBase & {
			image: Image
	})

interface Filters<T extends SupportedModules['moduleBrandName']> {
	moduleBrandName?: T
	moduleVersionsArray?: T extends 'esp_32_cam'
		? Array<(typeof ModuleVersions)['esp_32_cam'][number]>
		: T extends 'esp_32_wrower'
		? (typeof ModuleVersions)['esp_32_wrower']
		: T extends 'esp_ai_thinker'
		? (typeof ModuleVersions)['esp_ai_thinker']
		: undefined
	heapSizeGreater?: number
}

export class ModelHandler {
	getData<T extends SupportedModules['moduleBrandName']>({
		heapSizeGreater = 0,
		moduleBrandName,
		moduleVersionsArray
	}: Filters<T>) {
		let result = MOCK

		result = result.filter((item) => {
			return item.heapSize > heapSizeGreater
		})

		if (moduleBrandName) {
			result = result.filter((item) => {
				return item.moduleBrandName === moduleBrandName
			})
		}

		if (moduleVersionsArray) {
			// eslint-disable-next-line array-callback-return
			result = result.filter((item) => {
				for (const version of moduleVersionsArray) {
					if (version === item.moduleVersion) {
						return item.moduleVersion
					}
				}
			})
		}

		return result
	}
}
