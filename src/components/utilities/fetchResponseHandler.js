export default function fetchResponseHandler(response) {
  if (!response.ok) {
    throw new Error("fetch failed")
  }
  return response.json()
}