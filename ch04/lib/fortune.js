const fortuneCookies =[
    "conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "do not fear what you don't know.",
    "you will have a pleasant surprise.",
    "whenever possible, keep it simple.",
]
exports.getFortune = () => {
    const idx = Math.floor(Math. random()*fortuneCookies.langth)
    return fortuneCookies[idx]
}