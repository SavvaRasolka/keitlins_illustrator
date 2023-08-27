function monthSize(year, month)
{
    return 32 - new Date(year, month, 32).getDate()
}
export default monthSize