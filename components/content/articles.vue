<script setup lang="ts">
import { getSlotTextContent } from "../../utils";

const props = defineProps(["limit", "small", "firstFeatured"]);
const slots = useSlots();
const title = slots && slots.title ? getSlotTextContent(slots.title()) : false;

const { data: articlesData } = await useAsyncData(
  `articles-limit-${props.limit}-small-${props.small}-firstFeatured-${props.firstFeatured}`,
  () =>
    queryContent("/writing")
      .sort({ date: -1 })
      .where({ _dir: { $ne: "" } }, { _empty: { $ne: true } })
      .limit(props.limit || false)
      .find()
);
</script>

<template>
  <ArticlesList
    :articles="articlesData"
    :small="small"
    :firstFeatured="firstFeatured"
    :title="title"
  />
</template>
