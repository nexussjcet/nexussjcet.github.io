"use client";
import GitHubCalendar, { Activity } from 'react-github-calendar';

const shortData = (data: Activity[]) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 2;

    return data.filter(activity => {
        const date = new Date(activity.date);
        const monthOfDay = date.getMonth();

        return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
        );
    });
};

export function CustomGithubCalendar({ contributor }:
    { contributor: { username: string, name: string, avatar: string, url: string, projects: string[] } }
) {
    return (
        <div className="flex-1">
            <GitHubCalendar
                username={contributor.username}
                colorScheme="light"
                hideMonthLabels={true}
                hideColorLegend={true}
                hideTotalCount={true}
                transformData={shortData}
            />
        </div>
    )
}