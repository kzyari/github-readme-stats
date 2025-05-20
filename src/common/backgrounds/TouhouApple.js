const TouhouApple = `
    <g>
        <g data-testid="touhou_apple" transform="translate(0,0) scale(0.020000,-0.020000)"
            fill="#000000" fill-opacity="0.14" stroke="none">
            <path d="M1087 1760 c-15 -12 -48 -65 -73 -118 -25 -53 -47 -98 -49 -100 -1
            -1 -76 15 -166 38 -268 66 -355 53 -480 -70 -142 -139 -218 -387 -203 -655 15
            -266 86 -439 217 -529 44 -30 66 -38 129 -45 58 -7 84 -15 110 -34 19 -15 61
            -39 93 -54 51 -23 76 -28 167 -31 105 -4 109 -3 196 33 234 97 417 316 524
            625 41 118 49 260 20 342 -49 139 -224 261 -442 309 -74 16 -84 24 -66 58 8
            14 21 42 30 61 25 55 66 126 66 115 0 -12 20 16 20 29 0 4 -8 6 -18 4 -13 -4
            -18 0 -18 16 1 28 -25 31 -57 6z"/>
        </g>
        <animateTransform attributeName="transform"
            type="translate"
            additive="sum"
            keyTimes="0;0.2;0.5;0.8;1"
            values="280,75;280,78;280,82;280,78;280,75"
            keySplines=".42 0 1 1;.42 0 1 1;.42 0 1 1;.42 0 1 1;.42 0 1 1"
            begin="0s"
            dur="2s"
            repeatCount="indefinite"
        />
    </g>
`;

export default TouhouApple;
