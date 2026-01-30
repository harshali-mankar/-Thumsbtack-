export interface RaceInfoItem {
    title: string;
    highlight: string;
    image: string;
    reverse?: boolean;
}

export const raceInfo: RaceInfoItem[] = [
    {
        title: "Uniquely formulated for horse trainers",
        highlight: "Who Want to Win",
        image: "/assets/who-wants-to-win.jpg",
    },
    {
        title: "Natural",
        highlight: "Bleeder Remedy",
        image: "/assets/bleeder-remedy.jpg",
        reverse: true,
    },
];
