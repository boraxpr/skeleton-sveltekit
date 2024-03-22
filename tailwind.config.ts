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
				}
			},
			animation: {
				float1: 'float1 6s ease-in-out infinite',
				float2: 'float2 6s ease-in-out infinite',
				float3: 'float3 6s ease-in-out infinite',
				float4: 'float4 6s ease-in-out infinite',
				float5: 'float5 6s ease-in-out infinite'
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
