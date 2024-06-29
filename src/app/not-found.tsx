import Link from "next/link";
import PrimaryButton from "../../components/system/components/wrappers/primaryButton/primaryButton";

const NotFound = () => {
    return (
        <section className="w-[100vw] h-[100vh] flex flex-col justify-center items-center not-found-section">
            <h1 className="text-[10rem]"> OoPs!! </h1>
            <p className="mb-10"> The page you&nbsp;re looking for could not be found </p>
            <Link href="/"><PrimaryButton>
                Navigate to home page
            </PrimaryButton></Link>
        </section>
    )
}
export default NotFound;