export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`/api/user`)
    const data = await res.json()
    console.log(data);
}