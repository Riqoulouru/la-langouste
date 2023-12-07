import Link from "next/link";
import QuestionPage from "@/pages/games/vraifaux/qcm";

export default function Page() {
    return (
        <div>
            <Link href={"/games/top10"}>GO</Link>
            <QuestionPage id={2}></QuestionPage>
        </div>
    )
}