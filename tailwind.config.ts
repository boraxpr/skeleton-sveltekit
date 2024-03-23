import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			keyframes: {
				float1: {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
					'100%': { transform: 'translateY(0)' }
				},
				float2: {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(15px)' },
					'100%': { transform: 'translateY(0)' }
				},
				float3: {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(10px)' },
					'100%': { transform: 'translateY(0)' }
				},
				float4: {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-25px)' },
					'100%': { transform: 'translateY(0)' }
				},
				float5: {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(25px)' },
					'100%': { transform: 'translateY(0)' }
				},
				flip: {
					'0%': { transform: 'rotateY(0)' },
					'50%': { transform: 'rotateY(360deg)' },
					'100%': { content: 'none' }
				},
				shake: {
					'0%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(-2px) translateY(-1px)' },
					'50%': { transform: 'translateX(2px) translateY(1px)' },
					'75%': { transform: 'translateX(-1px) translateY(-2px)' },
					'100%': { transform: 'translateX(0) translateY(0)' }
				}
			},
			animation: {
				float1: 'float1 3s ease-in-out infinite',
				float2: 'float2 3s ease-in-out infinite',
				float3: 'float3 6s ease-in-out infinite',
				float4: 'float4 3s ease-in-out infinite',
				float5: 'float5 3s ease-in-out infinite',
				flip: 'flip 3s ease-in-out infinite',
				shake: ' shake 0.1s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite'
			}
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'vintage',
						enhancements: true
					}
				]
			}
		})
	]
} satisfies Config;
