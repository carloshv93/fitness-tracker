export async function getQuotesByTag({tag}: { tag: string }) {
    const res = await fetch(
        `https://thequoteshub.com/api/tags/${tag}?page=1&page_size=20&format=json`
    )
    if (!res.ok) throw new Error('Failed to fetch quotes')
    return res.json()
}
