function hover_button({href, prevColor, prevTextColor, nextColor, nextTextColor}) {
    return (
        <div class="flex justify-center my-4 py-4"><a href={href} class="border border-gray-600 text-white bg-gray-600 hover:text-gray-600 hover:bg-white transform duration-300 ease-in-out px-8 py-3">買い物をする</a></div>
    );
}