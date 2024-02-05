import * as React from "react";
import {IconSvgProps} from "@/types";

export const GithubIcon: React.FC<IconSvgProps> = ({
													   size = 24,
													   width,
													   height,
													   ...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export const MoonFilledIcon = ({
								   size = 24,
								   width,
								   height,
								   ...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
			fill="currentColor"
		/>
	</svg>
);

export const SunFilledIcon = ({
								  size = 24,
								  width,
								  height,
								  ...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<g fill="currentColor">
			<path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z"/>
			<path
				d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"/>
		</g>
	</svg>
);

export const HeartFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
			fill="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
		/>
	</svg>
);

export const InstagramIcon: React.FC<IconSvgProps> = ({
														  size = 24,
														  width,
														  height,
														  ...props
													  }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size || height}
			viewBox="0 0 600 600"
			width={size || width}
			{...props}
		>
			<path xmlns="http://www.w3.org/2000/svg"
				  d="M0 0 C1.41672095 -0.00258853 2.83344117 -0.00560303 4.2501604 -0.0090034 C8.12057068 -0.01701969 11.99096237 -0.01885996 15.86137998 -0.01960087 C20.04501738 -0.0214609 24.22864534 -0.02901304 28.41227722 -0.03573608 C37.55123205 -0.04928266 46.69018247 -0.05533865 55.82914567 -0.05974674 C61.54446076 -0.06251594 67.25977417 -0.06675456 72.97508812 -0.07125092 C88.82396876 -0.08343981 104.67284806 -0.0937392 120.52173328 -0.09712601 C121.53492515 -0.09734557 122.54811702 -0.09756514 123.59201167 -0.09779136 C124.60752308 -0.09800964 125.62303449 -0.09822791 126.66931897 -0.09845281 C128.72686756 -0.09889626 130.78441614 -0.09934282 132.84196472 -0.09979248 C133.86256328 -0.10001391 134.88316185 -0.10023534 135.93468764 -0.10046348 C152.45156034 -0.10440684 168.9683888 -0.12184847 185.48524443 -0.145152 C202.47540061 -0.16892815 219.46553466 -0.18133073 236.45570773 -0.18249393 C245.98181647 -0.18340728 255.50786758 -0.18907337 265.03396034 -0.20731354 C273.14979915 -0.22279946 281.26556252 -0.22778542 289.38141332 -0.21957543 C293.51366001 -0.21569847 297.64575518 -0.21645171 301.77798271 -0.23063278 C347.38548948 -0.37792054 387.12720141 6.9431736 420.8412323 39.76544189 C446.3209423 65.38922134 457.94458623 101.58486134 458.11338121 137.21608275 C458.10960188 138.50920278 458.10582256 139.80232281 458.10192871 141.1346283 C458.10495935 142.56890316 458.10885333 144.00317642 458.11352128 145.43744689 C458.12369288 149.32853068 458.12164754 153.21952122 458.11734068 157.11061227 C458.11485346 161.32686918 458.12391223 165.54310477 458.13137817 169.75935364 C458.14407272 178.00060602 458.1459254 186.24182574 458.14357791 194.48308625 C458.1417885 201.18876357 458.14355769 207.89443105 458.14780235 214.60010719 C458.14839754 215.55770188 458.14899273 216.51529658 458.14960596 217.50190929 C458.15081782 219.44784039 458.15203196 221.39377149 458.15324833 223.33970258 C458.16410392 241.55486683 458.16197093 259.77001252 458.15586349 277.98517779 C458.15069753 294.60836971 458.16194485 311.23150298 458.18096171 327.8546833 C458.20038649 344.96707456 458.2085879 362.07943813 458.20483845 379.19184047 C458.20293325 388.78157121 458.20534704 398.37125206 458.21955299 407.96097374 C458.2315272 416.12607944 458.23280463 424.29110454 458.22076283 432.45621147 C458.21491587 436.61279856 458.21365701 440.7692387 458.22576523 444.92581558 C458.34096208 487.43560656 452.46971962 528.31788644 421.22257996 559.74005127 C419.97998603 560.99977533 418.77334163 562.29471959 417.57170105 563.59356689 C397.34304547 585.0607116 369.31545134 594.83632627 340.8412323 599.14044189 C339.75905646 599.31035739 338.67688063 599.48027288 337.56191158 599.65533733 C331.31775296 600.42297677 325.04106167 600.28892856 318.7600708 600.28761292 C317.32730254 600.29091662 315.89453521 600.29464325 314.46176904 600.29875439 C310.53755692 600.3087257 306.61336009 600.31248333 302.6891371 600.3151437 C298.45085293 600.31906153 294.2125807 600.32863907 289.9743042 600.33735657 C279.7423518 600.35708382 269.51039846 600.36718441 259.2784318 600.37608436 C254.44961223 600.38047514 249.62079374 600.38584005 244.79197502 600.39107323 C228.72014754 600.40808505 212.64832073 600.42257508 196.57648563 600.42982197 C192.40928204 600.43173161 188.24207845 600.43365197 184.07487488 600.43560791 C183.03924148 600.43609165 182.00360808 600.43657539 180.93659186 600.43707379 C164.19271865 600.44535859 147.44891725 600.47066944 130.70507533 600.50318859 C113.47992091 600.53636714 96.25480282 600.55428061 79.0296163 600.55746621 C69.37254377 600.55962181 59.71557581 600.56822972 50.05853462 600.59392738 C41.82673308 600.61578276 33.5950615 600.62361287 25.36323423 600.6139606 C21.17375359 600.60945782 16.98454021 600.61106276 12.79509735 600.63072205 C-23.31438904 600.7906726 -58.27498741 597.16235557 -88.1587677 575.14044189 C-88.9837677 574.53844971 -89.8087677 573.93645752 -90.6587677 573.31622314 C-102.8490342 563.99770212 -112.85160203 552.9965904 -121.1587677 540.14044189 C-121.80587708 539.14270752 -122.45298645 538.14497314 -123.1197052 537.11700439 C-141.03110807 507.94253597 -142.63259741 474.09654918 -142.55094171 440.82670879 C-142.54406018 436.66574896 -142.55467678 432.5048245 -142.56288147 428.34387207 C-142.57612542 420.22340515 -142.57338315 412.10302207 -142.56464355 403.98255205 C-142.55783026 397.37475435 -142.55696591 390.76697991 -142.560215 384.15917969 C-142.5606747 383.2137881 -142.56113439 382.26839652 -142.56160802 381.2943567 C-142.56256733 379.37298854 -142.56353998 377.45162037 -142.5645258 375.53025222 C-142.57305233 357.57158753 -142.56328873 339.61296901 -142.5471247 321.6543119 C-142.53372402 306.29094152 -142.53605289 290.92763917 -142.54988098 275.56427002 C-142.56598539 257.66382798 -142.57222862 239.76342626 -142.56304419 221.86297798 C-142.56208868 219.94922003 -142.56114557 218.03546207 -142.560215 216.1217041 C-142.55975217 215.18043557 -142.55928934 214.23916703 -142.55881249 213.26937521 C-142.55623714 206.68006179 -142.56056196 200.09077425 -142.56765366 193.50146484 C-142.57612313 185.45620195 -142.5736753 177.41102671 -142.55781142 169.36577368 C-142.55000122 165.27180765 -142.54671087 161.17798702 -142.55675888 157.08402252 C-142.62438019 126.9659224 -140.53995817 98.56140491 -127.1587677 71.14044189 C-126.67536926 70.14528564 -126.19197083 69.15012939 -125.69392395 68.12481689 C-114.45272233 46.32747304 -96.25289235 29.12789843 -75.1587677 17.14044189 C-74.02697083 16.49075439 -72.89517395 15.84106689 -71.7290802 15.17169189 C-49.83468282 3.42599165 -24.5236856 -0.01635918 0 0 Z "
				  fill="#D94969" transform="translate(142.1587677001953,-0.14044189453125)"
			/>
			<path xmlns="http://www.w3.org/2000/svg"
				  d="M0 0 C1.41672095 -0.00258853 2.83344117 -0.00560303 4.2501604 -0.0090034 C8.12057068 -0.01701969 11.99096237 -0.01885996 15.86137998 -0.01960087 C20.04501738 -0.0214609 24.22864534 -0.02901304 28.41227722 -0.03573608 C37.55123205 -0.04928266 46.69018247 -0.05533865 55.82914567 -0.05974674 C61.54446076 -0.06251594 67.25977417 -0.06675456 72.97508812 -0.07125092 C88.82396876 -0.08343981 104.67284806 -0.0937392 120.52173328 -0.09712601 C121.53492515 -0.09734557 122.54811702 -0.09756514 123.59201167 -0.09779136 C124.60752308 -0.09800964 125.62303449 -0.09822791 126.66931897 -0.09845281 C128.72686756 -0.09889626 130.78441614 -0.09934282 132.84196472 -0.09979248 C133.86256328 -0.10001391 134.88316185 -0.10023534 135.93468764 -0.10046348 C152.45156034 -0.10440684 168.9683888 -0.12184847 185.48524443 -0.145152 C202.47540061 -0.16892815 219.46553466 -0.18133073 236.45570773 -0.18249393 C245.98181647 -0.18340728 255.50786758 -0.18907337 265.03396034 -0.20731354 C273.14979915 -0.22279946 281.26556252 -0.22778542 289.38141332 -0.21957543 C293.51366001 -0.21569847 297.64575518 -0.21645171 301.77798271 -0.23063278 C347.38548948 -0.37792054 387.12720141 6.9431736 420.8412323 39.76544189 C446.3209423 65.38922134 457.94458623 101.58486134 458.11338121 137.21608275 C458.10960188 138.50920278 458.10582256 139.80232281 458.10192871 141.1346283 C458.10495935 142.56890316 458.10885333 144.00317642 458.11352128 145.43744689 C458.12369288 149.32853068 458.12164754 153.21952122 458.11734068 157.11061227 C458.11485346 161.32686918 458.12391223 165.54310477 458.13137817 169.75935364 C458.14407272 178.00060602 458.1459254 186.24182574 458.14357791 194.48308625 C458.1417885 201.18876357 458.14355769 207.89443105 458.14780235 214.60010719 C458.14839754 215.55770188 458.14899273 216.51529658 458.14960596 217.50190929 C458.15081782 219.44784039 458.15203196 221.39377149 458.15324833 223.33970258 C458.16410392 241.55486683 458.16197093 259.77001252 458.15586349 277.98517779 C458.15069753 294.60836971 458.16194485 311.23150298 458.18096171 327.8546833 C458.20038649 344.96707456 458.2085879 362.07943813 458.20483845 379.19184047 C458.20293325 388.78157121 458.20534704 398.37125206 458.21955299 407.96097374 C458.2315272 416.12607944 458.23280463 424.29110454 458.22076283 432.45621147 C458.21491587 436.61279856 458.21365701 440.7692387 458.22576523 444.92581558 C458.34096208 487.43560656 452.46971962 528.31788644 421.22257996 559.74005127 C419.97998603 560.99977533 418.77334163 562.29471959 417.57170105 563.59356689 C397.34304547 585.0607116 369.31545134 594.83632627 340.8412323 599.14044189 C339.75905646 599.31035739 338.67688063 599.48027288 337.56191158 599.65533733 C331.31775296 600.42297677 325.04106167 600.28892856 318.7600708 600.28761292 C317.32730254 600.29091662 315.89453521 600.29464325 314.46176904 600.29875439 C310.53755692 600.3087257 306.61336009 600.31248333 302.6891371 600.3151437 C298.45085293 600.31906153 294.2125807 600.32863907 289.9743042 600.33735657 C279.7423518 600.35708382 269.51039846 600.36718441 259.2784318 600.37608436 C254.44961223 600.38047514 249.62079374 600.38584005 244.79197502 600.39107323 C228.72014754 600.40808505 212.64832073 600.42257508 196.57648563 600.42982197 C192.40928204 600.43173161 188.24207845 600.43365197 184.07487488 600.43560791 C183.03924148 600.43609165 182.00360808 600.43657539 180.93659186 600.43707379 C164.19271865 600.44535859 147.44891725 600.47066944 130.70507533 600.50318859 C113.47992091 600.53636714 96.25480282 600.55428061 79.0296163 600.55746621 C69.37254377 600.55962181 59.71557581 600.56822972 50.05853462 600.59392738 C41.82673308 600.61578276 33.5950615 600.62361287 25.36323423 600.6139606 C21.17375359 600.60945782 16.98454021 600.61106276 12.79509735 600.63072205 C-23.31438904 600.7906726 -58.27498741 597.16235557 -88.1587677 575.14044189 C-88.9837677 574.53844971 -89.8087677 573.93645752 -90.6587677 573.31622314 C-102.8490342 563.99770212 -112.85160203 552.9965904 -121.1587677 540.14044189 C-121.80587708 539.14270752 -122.45298645 538.14497314 -123.1197052 537.11700439 C-141.03110807 507.94253597 -142.63259741 474.09654918 -142.55094171 440.82670879 C-142.54406018 436.66574896 -142.55467678 432.5048245 -142.56288147 428.34387207 C-142.57612542 420.22340515 -142.57338315 412.10302207 -142.56464355 403.98255205 C-142.55783026 397.37475435 -142.55696591 390.76697991 -142.560215 384.15917969 C-142.5606747 383.2137881 -142.56113439 382.26839652 -142.56160802 381.2943567 C-142.56256733 379.37298854 -142.56353998 377.45162037 -142.5645258 375.53025222 C-142.57305233 357.57158753 -142.56328873 339.61296901 -142.5471247 321.6543119 C-142.53372402 306.29094152 -142.53605289 290.92763917 -142.54988098 275.56427002 C-142.56598539 257.66382798 -142.57222862 239.76342626 -142.56304419 221.86297798 C-142.56208868 219.94922003 -142.56114557 218.03546207 -142.560215 216.1217041 C-142.55975217 215.18043557 -142.55928934 214.23916703 -142.55881249 213.26937521 C-142.55623714 206.68006179 -142.56056196 200.09077425 -142.56765366 193.50146484 C-142.57612313 185.45620195 -142.5736753 177.41102671 -142.55781142 169.36577368 C-142.55000122 165.27180765 -142.54671087 161.17798702 -142.55675888 157.08402252 C-142.62438019 126.9659224 -140.53995817 98.56140491 -127.1587677 71.14044189 C-126.67536926 70.14528564 -126.19197083 69.15012939 -125.69392395 68.12481689 C-114.45272233 46.32747304 -96.25289235 29.12789843 -75.1587677 17.14044189 C-74.02697083 16.49075439 -72.89517395 15.84106689 -71.7290802 15.17169189 C-49.83468282 3.42599165 -24.5236856 -0.01635918 0 0 Z M47.0287323 82.82794189 C45.2029364 83.08849365 45.2029364 83.08849365 43.34025574 83.35430908 C11.05959079 88.28311132 -17.35568393 103.73829716 -37.2134552 130.04278564 C-69.4994096 175.44786778 -62.47899301 236.7982529 -62.35936391 289.53709686 C-62.34605869 295.69024801 -62.34366333 301.84336341 -62.3443138 307.99652702 C-62.34499974 315.51201379 -62.33800801 323.02748037 -62.3288672 330.54296088 C-62.32678144 332.64586772 -62.32603248 334.74877109 -62.32562828 336.85167885 C-62.32020365 351.3189098 -62.18156828 365.77164857 -61.71076965 380.23101807 C-61.67218181 381.42345532 -61.63359396 382.61589258 -61.59383678 383.8444643 C-61.04049156 400.79773558 -61.04049156 400.79773558 -58.4087677 417.51544189 C-58.2332135 418.31506348 -58.0576593 419.11468506 -57.87678528 419.9385376 C-53.20950932 440.55012696 -45.94048279 461.48921415 -31.1587677 477.14044189 C-30.4987677 477.14044189 -29.8387677 477.14044189 -29.1587677 477.14044189 C-28.92029114 477.69344971 -28.68181458 478.24645752 -28.43611145 478.81622314 C-26.85833815 481.68709504 -24.91115064 483.89354 -22.7212677 486.32794189 C-21.54757629 487.64858643 -21.54757629 487.64858643 -20.35017395 488.99591064 C-18.26688364 491.34746911 -18.26688364 491.34746911 -15.1587677 492.14044189 C-14.01605561 493.31676316 -12.87363235 494.493367 -11.73298645 495.67169189 C-6.2172872 500.81785298 -0.54285591 503.7978804 6.8412323 505.14044189 C6.8412323 505.80044189 6.8412323 506.46044189 6.8412323 507.14044189 C20.96011654 512.75700196 20.96011654 512.75700196 35.7865448 515.85137939 C37.8412323 516.14044189 37.8412323 516.14044189 38.8412323 517.14044189 C40.89474423 517.52528747 42.9602391 517.8465827 45.0287323 518.14044189 C46.15666199 518.30544189 47.28459167 518.47044189 48.44670105 518.64044189 C81.78051582 522.78942372 116.22649267 521.35636206 149.73674011 521.38067627 C154.86474273 521.38504624 159.99257573 521.39891301 165.12052917 521.42169189 C190.98407367 521.53389928 216.79203515 521.47228225 242.6146698 519.87481689 C243.54059559 519.82060829 244.46652138 519.76639969 245.42050552 519.7105484 C255.71969662 519.0871124 265.84520678 517.96472193 276.01945496 516.23126221 C276.94765234 516.07411617 277.87584972 515.91697014 278.8321743 515.7550621 C298.81741284 512.14770543 318.62804309 503.74530434 333.8412323 490.14044189 C335.06519714 489.11177002 335.06519714 489.11177002 336.31388855 488.06231689 C351.49161629 475.01932366 360.62614012 459.56700966 367.8412323 441.14044189 C368.20990417 440.23680908 368.57857605 439.33317627 368.9584198 438.40216064 C374.56127809 423.3960557 376.0149396 406.98761664 376.94181824 391.12335205 C376.98405502 390.41891881 377.0262918 389.71448557 377.06980848 388.98870587 C378.04776463 372.34563677 378.13709645 355.71784 378.10988331 339.05092955 C378.10468032 334.83911649 378.10955222 330.62731039 378.11265564 326.41549683 C378.116251 319.3649739 378.11161074 312.31449346 378.10197449 305.26397705 C378.09105599 297.18338212 378.09465815 289.10288793 378.1056273 281.02229536 C378.11477767 273.99202071 378.11594928 266.96177591 378.11074996 259.93149722 C378.10767779 255.77236257 378.10708704 251.6132749 378.11382294 247.45414352 C378.17335904 204.95565839 377.51016471 159.35669619 348.8412323 125.14044189 C347.99689636 124.13239502 347.15256042 123.12434814 346.28263855 122.08575439 C322.33372596 94.37394364 287.79334273 84.06420364 252.3078413 81.3198595 C235.18830423 80.09802942 218.16368728 79.85721523 201.0075891 79.90472245 C197.04046207 79.91373637 193.07333636 79.91174114 189.10620117 79.91136169 C182.45967087 79.91228806 175.81318718 79.92083221 169.16667175 79.93463135 C161.55540146 79.95037817 153.94418183 79.95562764 146.33289641 79.95489579 C138.11400318 79.95421313 129.89512864 79.96118835 121.67624116 79.9703424 C119.35621392 79.97244191 117.03618982 79.97317911 114.71616173 79.97358131 C80.78155979 79.79329036 80.78155979 79.79329036 47.0287323 82.82794189 Z "
				  fill="#BE5B89" transform="translate(142.1587677001953,-0.14044189453125)"
			/>
			<path xmlns="http://www.w3.org/2000/svg"
				  d="M0 0 C2.35219429 -0.00072204 4.70438311 -0.00287739 7.05657601 -0.00549722 C15.32461745 -0.01468184 23.59264303 -0.01884066 31.8606894 -0.01804566 C39.46893354 -0.01744603 47.07710654 -0.02799354 54.68533272 -0.04378933 C61.30277893 -0.05702001 67.92020233 -0.0622232 74.53766161 -0.06159025 C78.45232624 -0.06133987 82.36692732 -0.06392818 86.2815783 -0.0747683 C137.82531301 -0.20753353 188.34632394 1.7003235 227.34189057 39.60085082 C256.21864476 70.18510004 260.99981189 112.42998849 260.983248 152.66676879 C260.98625082 154.15236533 260.98965587 155.6379611 260.99342561 157.1235559 C261.00216541 161.11649584 261.00459972 165.10941428 261.00524139 169.10236287 C261.00595875 171.61685661 261.00810605 174.13134512 261.01073861 176.64583755 C261.01996592 185.47606025 261.02407765 194.30626799 261.02328706 203.13649535 C261.02269016 211.26990486 261.03317208 219.40324722 261.04903072 227.53663981 C261.06227987 234.59217984 261.06746367 241.64769845 261.06683165 248.70325077 C261.06658126 252.88421799 261.06916796 257.06512572 261.0800097 261.24608016 C261.12017334 277.92612135 260.93851865 294.54550346 259.92904878 311.19899535 C259.88883052 311.87429156 259.84861227 312.54958777 259.80717528 313.2453475 C257.9924857 342.92536023 251.25827285 373.44085218 230.83798432 396.16725707 C230.01685151 397.13018676 229.1957187 398.09311645 228.34970307 399.08522582 C210.50978217 419.68843101 185.71506505 431.73789694 159.01620698 436.25807738 C157.5200029 436.51299642 157.5200029 436.51299642 155.99357247 436.77306533 C145.89710754 438.42425211 135.81811414 439.30407821 125.61142182 439.90163207 C124.14318027 439.99246188 124.14318027 439.99246188 122.64527726 440.08512664 C96.5477041 441.6680273 70.43214667 441.54763195 44.29751801 441.4315393 C39.15652089 441.41239098 34.01555892 441.40842169 28.87453103 441.40469146 C-45.60051162 441.34537511 -45.60051162 441.34537511 -71.16201568 438.16725707 C-71.84360747 438.08475707 -72.52519927 438.00225707 -73.22744536 437.91725707 C-78.03592366 437.29334909 -78.03592366 437.29334909 -79.16201568 436.16725707 C-80.78434 435.93902133 -82.41021532 435.73603107 -84.03701568 435.54225707 C-93.15506796 434.12929013 -101.61624726 430.52701706 -110.16201568 427.16725707 C-110.16201568 426.50725707 -110.16201568 425.84725707 -110.16201568 425.16725707 C-111.42014068 424.81663207 -112.67826568 424.46600707 -113.97451568 424.10475707 C-120.75710133 421.8546612 -128.14012093 418.2000992 -132.16201568 412.16725707 C-133.31250396 411.48856566 -133.31250396 411.48856566 -134.48623443 410.79616332 C-137.56502018 408.9219244 -139.58518858 406.79522655 -141.97451568 404.10475707 C-142.76471099 403.22690551 -143.5549063 402.34905395 -144.36904693 401.44460082 C-146.16201568 399.16725707 -146.16201568 399.16725707 -146.16201568 397.16725707 C-147.00312896 396.86368285 -147.00312896 396.86368285 -147.86123443 396.55397582 C-151.04114899 394.63738894 -152.87894946 391.96745084 -154.97451568 388.97975707 C-155.41174956 388.35899291 -155.84898345 387.73822875 -156.29946685 387.09865355 C-167.35577163 370.92883315 -172.2858678 352.12998053 -176.16201568 333.16725707 C-176.33256123 332.39474199 -176.50310678 331.62222692 -176.67882037 330.82630229 C-178.49190675 320.84880742 -178.38664158 310.37437073 -178.71401763 300.25783324 C-178.75605724 298.96669458 -178.79809686 297.67555593 -178.8414104 296.34529185 C-179.2693957 282.50410175 -179.32661121 268.66279017 -179.32927275 254.81568718 C-179.32999977 252.67280071 -179.33216365 250.5299201 -179.33476996 248.38703513 C-179.34392506 240.83175685 -179.3481171 233.2764958 -179.34731841 225.72121215 C-179.34678528 219.56916743 -179.35387284 213.41718609 -179.36782622 207.26515746 C-179.66112776 74.88365031 -179.66112776 74.88365031 -141.97451568 36.41725707 C-130.61530833 25.17693534 -118.00500384 17.04004346 -103.16201568 11.16725707 C-102.48815825 10.8992932 -101.81430083 10.63132934 -101.12002349 10.35524535 C-90.97510878 6.45860102 -80.71753609 4.38327031 -69.97451568 2.85475707 C-68.86704986 2.69531615 -67.75958404 2.53587523 -66.61855865 2.37160277 C-44.58089615 -0.46646244 -22.17985565 0.00384511 0 0 Z M-118.36514068 68.96413207 C-142.59595605 95.82515806 -139.48597496 136.12135889 -139.43066669 169.81557846 C-139.42548878 173.97998204 -139.43033092 178.14437827 -139.43343902 182.30878234 C-139.43704965 189.30548755 -139.43236149 196.30215017 -139.42275786 203.29884887 C-139.41192616 211.28018043 -139.41537221 219.26140931 -139.42641068 227.24273831 C-139.43562448 234.19407471 -139.43670025 241.14538102 -139.43153334 248.09672159 C-139.42848334 252.20441084 -139.42780221 256.31205271 -139.43460631 260.41973853 C-139.45897138 277.55873889 -139.19306771 294.64610533 -138.28994536 311.76369262 C-138.25245571 312.51677943 -138.21496605 313.26986624 -138.17634034 314.04577386 C-137.58656304 325.59188844 -136.09832082 336.27376144 -132.16201568 347.16725707 C-131.78045318 348.29131957 -131.39889068 349.41538207 -131.00576568 350.57350707 C-128.22918249 358.00274317 -124.11633659 364.01610582 -119.16201568 370.16725707 C-118.5561563 370.94971801 -117.95029693 371.73217895 -117.32607818 372.53835082 C-103.78578183 389.02094786 -82.36139705 396.74252591 -61.66819739 398.95160842 C-57.37311072 399.32118643 -53.07997374 399.40338829 -48.77114654 399.47926879 C-47.76455804 399.49975909 -46.75796954 399.5202494 -45.72087836 399.54136062 C-42.37711529 399.60696487 -39.03328286 399.66513126 -35.68935943 399.72194457 C-34.51829083 399.74288051 -33.34722224 399.76381644 -32.14066672 399.7853868 C-3.43114061 400.29015347 25.27767944 400.32067456 53.99049747 400.29582644 C59.64102871 400.29145072 65.29153792 400.29461655 70.9420678 400.29945457 C76.52903514 400.30403765 82.11599312 400.30461363 87.70296174 400.3020159 C90.98092552 400.30049188 94.25887172 400.30056982 97.53683496 400.30355239 C109.84308519 400.31232939 122.14088209 400.25473367 134.43979096 399.79567504 C135.79140274 399.75251757 135.79140274 399.75251757 137.1703198 399.70848823 C155.39139573 398.91285569 175.62897803 392.76256656 189.83798432 381.16725707 C191.11802339 380.13085082 191.11802339 380.13085082 192.42392182 379.07350707 C211.22228229 363.04127172 217.70814227 339.91532941 219.83798432 316.16725707 C220.69906246 305.14903158 220.9873738 294.20146393 220.983248 283.15456176 C220.98625003 281.51964787 220.98965491 279.88473468 220.99342561 278.24982238 C221.00216253 273.85906728 221.00459928 269.46833173 221.00524139 265.07756877 C221.00595767 262.32145467 221.00810274 259.56534537 221.01073861 256.80923247 C221.01995715 247.15757476 221.0240778 237.50593076 221.02328706 227.85426879 C221.02268686 218.91567376 221.03323647 209.97713919 221.04903072 201.03855944 C221.06218423 193.3139938 221.06746772 185.58944775 221.06683165 177.86487103 C221.066579 173.27353393 221.0692997 168.68225072 221.0800097 164.09092498 C221.84902267 112.05025858 221.84902267 112.05025858 198.58798432 66.91335082 C180.28031195 48.63168366 156.160477 41.47141897 130.7254355 40.61525512 C129.49985775 40.5732155 128.27428 40.53117589 127.01156354 40.48786235 C111.71676019 40.01080142 96.42032081 40.0024797 81.11937571 40 C78.60035151 39.9992773 76.08133241 39.99712094 73.5623095 39.99450278 C64.71531425 39.98533122 55.86833379 39.98115827 47.02133393 39.98195434 C38.865341 39.98255586 30.70941403 39.97196793 22.55343777 39.95621067 C15.46548921 39.94302034 8.37756196 39.93777506 1.28960127 39.93840975 C-2.90656698 39.93866098 -7.10267607 39.93602119 -11.2988317 39.9252317 C-69.90770938 39.18295716 -69.90770938 39.18295716 -118.36514068 68.96413207 Z "
				  fill="#FEFDFD" transform="translate(259.1620156764984,79.83274292945862)"
			/>
			<path xmlns="http://www.w3.org/2000/svg"
				  d="M0 0 C1.093125 0.52980469 2.18625 1.05960938 3.3125 1.60546875 C13.4441466 6.85422456 21.68538572 14.28025243 30 22 C30.67933594 22.60199219 31.35867188 23.20398438 32.05859375 23.82421875 C45.91393752 36.67595613 54.15371233 55.06574006 59 73 C59.26643311 73.98436035 59.53286621 74.9687207 59.80737305 75.98291016 C66.5676499 102.92501318 61.9576086 132.14517803 48 156 C47.49597656 156.92554688 46.99195313 157.85109375 46.47265625 158.8046875 C38.21115959 173.49687823 25.35216098 187.12237465 11 196 C9.51693359 196.96679688 9.51693359 196.96679688 8.00390625 197.953125 C-9.01113018 208.45474937 -30.10254576 214.62447849 -50.0625 214.4375 C-51.23425781 214.42847656 -52.40601563 214.41945313 -53.61328125 214.41015625 C-76.53695233 213.9596911 -97.12692178 207.03330718 -116 194 C-116.78246094 193.45988281 -117.56492188 192.91976562 -118.37109375 192.36328125 C-142.00723264 174.96270128 -158.43209661 147.99242776 -163 119 C-166.91170765 87.4701728 -160.51716284 57.89179636 -141.25 32.375 C-123.36110314 9.54457144 -98.44841251 -5.94924816 -69.8125 -11.375 C-45.10948887 -14.35800512 -22.32371639 -10.83069411 0 0 Z "
				  fill="#FEFDFD" transform="translate(351,199)"
			/>
			<path xmlns="http://www.w3.org/2000/svg"
				  d="M0 0 C14.64807964 11.19850539 26.58571352 27.20475722 29.609375 45.734375 C30.93325343 58.07104746 31.23763521 71.23069736 27 83 C26.50693359 84.45019531 26.50693359 84.45019531 26.00390625 85.9296875 C19.39262118 103.54453008 6.61963722 117.35316673 -10 126 C-26.94345176 133.64497881 -47.20657412 136.66318003 -65.25 130.9375 C-67.52530822 130.01867474 -69.77787415 129.04087659 -72 128 C-73.11246094 127.50371094 -74.22492188 127.00742187 -75.37109375 126.49609375 C-90.32932108 119.18435719 -101.77627011 106.77964075 -109.3125 92.0625 C-109.80121582 91.11467651 -109.80121582 91.11467651 -110.29980469 90.14770508 C-115.01468251 80.47631808 -116.5619932 71.01427422 -116.5 60.3125 C-116.49250732 58.60501587 -116.49250732 58.60501587 -116.48486328 56.86303711 C-116.10813952 38.5529635 -108.96934534 23.71635037 -97 10 C-96.48050781 9.38511719 -95.96101563 8.77023438 -95.42578125 8.13671875 C-70.96871478 -18.66132638 -28.65446401 -19.92658897 0 0 Z "
				  fill="#E03A66" transform="translate(343,240)"
			/>
			<path xmlns="http://www.w3.org/2000/svg"
				  d="M0 0 C7.05893493 4.0034086 12.70598659 8.68738439 15.23828125 16.6875 C17.0477224 26.33785277 15.0154308 33.5927994 9.625 41.75 C4.70289704 47.70340073 -1.5197156 50.11021143 -9.04296875 51.1015625 C-16.15610742 51.48280265 -21.53860434 49.83547696 -27.375 45.75 C-32.82120809 40.70593808 -36.97107132 34.75250129 -37.578125 27.234375 C-37.73006371 18.37128336 -36.25852001 12.00040287 -30.19140625 5.35546875 C-21.66656101 -2.17939447 -10.48364126 -5.12393861 0 0 Z "
				  fill="#FEFBFD" transform="translate(428.375,158.25)"
			/>
			<path xmlns="http://www.w3.org/2000/svg"
				  d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.21238281 1.71542969 0.42476562 2.43085938 -0.38671875 3.16796875 C-3.94975633 6.41839135 -7.47713423 9.70615775 -11 13 C-11.57105469 13.52883789 -12.14210937 14.05767578 -12.73046875 14.60253906 C-33.91278994 34.34061108 -43.34040001 58.21316876 -50 86 C-50.33 86 -50.66 86 -51 86 C-49.51040392 54.7184824 -30.44035812 26.85374901 -8 6.375 C-5.38668262 4.02757247 -2.92472566 1.9498171 0 0 Z "
				  fill="#776ED5" transform="translate(54,25)"
			/>
		</svg>
	);
};