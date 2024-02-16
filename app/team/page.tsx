"use client"
import {Member, MemberCard} from "@/components/ui/member-card";
import React, {useMemo} from "react";
import roster from './team.json'
import {TextGenerateEffect} from "@/components/ui/autotype";

export default function TeamPage() {
    const { mentors, mechanical, programming, media, lead } = useMemo(() => (
        roster.reduce((prev, curr: Member) => {
            if (curr.department === 'mechanical') {
                prev.mechanical.push(curr);
            } else if (curr.department === 'programming') {
                prev.programming.push(curr);
            } else if (curr.department === 'mentor') {
                prev.mentors.push(curr);
            } else if (curr.department === 'media') {
                prev.media.push(curr);
            } else if (curr.department === 'lead') {
                prev.lead.push(curr);
            }
            return prev;
        }, {
            mechanical: [] as Member[],
            programming: [] as Member[],
            mentors: [] as Member[],
            media: [] as Member[],
            lead: [] as Member[],
        })
    ), []);

    return (
        <div className="container">
            <TextGenerateEffect words={"Our Team Members"} className={"underline font-bold text-center text-5xl md:text-6xl main py-20"} />
            <TextGenerateEffect words={"Mentors"}
                                className={"font-bold text-3xl md:text-4xl text-center main py-4 mb-10"}/>
            <div className="flex flex-wrap gap-10 justify-center">
                {mentors.sort((a, b) => a.name < b.name ? -1 : 1).map((member, i) => <MemberCard key={i}
                                                                                                 member={member}/>)}
            </div>
            <hr className="my-10 border-slate-700/50"/>
            <TextGenerateEffect words={"Executives"}
                                className={"font-bold text-3xl md:text-4xl text-center main py-4 mb-10"}/>
            <div className="flex flex-wrap gap-10 justify-center">
                {lead.sort((a, b) => a.name < b.name ? -1 : 1).map((member, i) => <MemberCard key={i}
                                                                                              member={member}/>)}
            </div>
            <hr className="my-10 border-slate-700/50"/>
            <TextGenerateEffect words={"Mechanical"}
                                className={"font-bold text-3xl md:text-4xl text-center main py-4 mb-10"}/>
            <div className="flex flex-wrap gap-10 justify-center">
                {mechanical.sort((a, b) => a.name < b.name ? -1 : 1).map((member, i) => <MemberCard key={i}
                                                                                                    member={member}/>)}
            </div>
            <hr className="my-10 border-slate-700/50"/>
            <TextGenerateEffect words={"Programming"}
                                className={"font-bold text-3xl md:text-4xl text-center main py-4 mb-10"}/>
            <div className="flex flex-wrap gap-10 justify-center">
                {programming.sort((a, b) => a.name < b.name ? -1 : 1).map((member, i) => <MemberCard key={i}
                                                                                                     member={member}/>)}
            </div>
            <hr className="my-10 border-slate-700/50"/>
            <TextGenerateEffect words={"Media"}
                                className={"font-bold text-3xl md:text-4xl text-center main py-4 mb-10"}/>
            <div className="flex flex-wrap gap-10 justify-center">
                {media.sort((a, b) => a.name < b.name ? -1 : 1).map((member, i) => <MemberCard key={i}
                                                                                               member={member}/>)}
            </div>
        </div>

    );
}
