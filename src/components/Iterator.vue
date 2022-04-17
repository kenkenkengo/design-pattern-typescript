<script setup lang="ts">
import { ref, onMounted } from "vue";
import { BookShelf } from "@/iterator/BookShelf";
import { Book } from "@/iterator/Book";
import { Iterator } from "@/iterator/Iterator";

const bookShelf: BookShelf = new BookShelf(4);

const createBooks = () => {
  bookShelf.appendBook(new Book("sample1"));
  bookShelf.appendBook(new Book("sample2"));
  bookShelf.appendBook(new Book("sample3"));
  bookShelf.appendBook(new Book("sample4"));
};

const it: Iterator = bookShelf.iterator();
const books = ref<Book[]>([]);

const iterate = () => {
  while (it.hasNext()) {
    books.value.push(it.next());
  }
};

onMounted(() => {
  createBooks();
  iterate();
});
</script>

<template>
  <h1>Iterator</h1>
  <div v-for="b in books" :key="b">
    {{ b.getName() }}
  </div>
</template>

<style scoped></style>
