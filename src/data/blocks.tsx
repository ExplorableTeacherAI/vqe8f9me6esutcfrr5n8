import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineTooltip } from "@/components/atoms";

// Initialize variables and their colors from this file's variable definitions
import { useVariableStore, initializeVariableColors } from "@/stores";
import { getDefaultValues, variableDefinitions } from "./variables";
useVariableStore.getState().initialize(getDefaultValues());
initializeVariableColors(variableDefinitions);

/**
 * ------------------------------------------------------------------
 * BLOCK CONFIGURATION
 * ------------------------------------------------------------------
 * This file is the entry point for your lesson content.
 * 
 * INSTRUCTIONS:
 * 1. Create your content using <Block> components.
 * 2. Use Layout components to organize your blocks.
 * 3. Add your blocks to the `blocks` array below.
 * 
 * ------------------------------------------------------------------
 * CROSS-BLOCK VARIABLES
 * ------------------------------------------------------------------
 * Variables can be shared across blocks using the global store.
 * 
 * DEFINE VARIABLES: src/data/variables.ts (use only variables.ts in this file; same structure as exampleBlocks + exampleVariables)
 * 
 * USAGE IN BLOCKS:
 * 
 * // Reading a value (auto-updates when changed):
 * import { useVar } from '@/stores';
 * const amplitude = useVar('amplitude', 1);
 * 
 * // Setting a value:
 * import { useSetVar } from '@/stores';
 * const setVar = useSetVar();
 * setVar('amplitude', 2.5);
 * 
 * // InlineScrubbleNumber (from variables.ts): getVariableInfo(name) + numberPropsFromDefinition(...)
 * <InlineScrubbleNumber varName="amplitude" {...numberPropsFromDefinition(getVariableInfo('amplitude'))} />
 * 
 * ------------------------------------------------------------------
 * AVAILABLE LAYOUTS
 * ------------------------------------------------------------------
 * 
 * 1. StackLayout
 *    - Best for: Title headers, introductory text, broad visualizations.
 *    - Usage:
 *      <StackLayout maxWidth="xl">
 *          <Block id="intro">...</Block>
 *      </StackLayout>
 * 
 * 2. SplitLayout
 *    - Best for: Side-by-side content (e.g., Text + Visualization).
 *    - Usage:
 *      <SplitLayout ratio="1:1" gap="lg">
 *          <Block id="left">...</Block>
 *          <Block id="right">...</Block>
 *      </SplitLayout>
 * 
 * 3. GridLayout
 *    - Best for: Multiple equal-sized items (cards, galleries).
 *    - Usage:
 *      <GridLayout columns={3} gap="md">
 *          <Block id="item-1">...</Block>
 *          <Block id="item-2">...</Block>
 *          <Block id="item-3">...</Block>
 *      </GridLayout>
 * 
 * 4. ScrollytellingLayout
 *    - Best for: Narrative steps with a reactive sticky visualization.
 *    - Usage:
 *      <ScrollytellingLayout varName="scrollStep" visualPosition="right">
 *          <ScrollStep><Block id="step-0">...</Block></ScrollStep>
 *          <ScrollStep><Block id="step-1">...</Block></ScrollStep>
 *          <ScrollVisual><Block id="viz">...</Block></ScrollVisual>
 *      </ScrollytellingLayout>
 * 
 * EXAMPLES:
 * See `src/data/exampleBlocks.tsx` for comprehensive examples.
 * 
 * NOTE: If you are seeing examples in the browser instead of this content,
 * check your .env file and set VITE_SHOW_EXAMPLES=false.
 */

export const blocks: ReactElement[] = [
    <StackLayout key="layout-history-title" maxWidth="xl">
        <Block id="block-history-title" padding="md">
            <EditableH2 id="h2-history-title" blockId="block-history-title">
                The Birth of Zero: A Mathematical Revolution
            </EditableH2>
        </Block>
    </StackLayout>,
    <StackLayout key="layout-history-content" maxWidth="xl">
        <Block id="block-history-content" padding="sm">
            <EditableParagraph id="para-history-content" blockId="block-history-content">
                For thousands of years, civilizations counted without a symbol for nothing. The ancient Babylonians used a space as a placeholder, the Greeks pondered the philosophical paradox of "nothing," and the Romans built an empire with numerals that had no zero at all. It wasn't until around the 5th century CE in India that mathematicians like{" "}
                <InlineTooltip
                    id="tooltip-brahmagupta"
                    tooltip="An Indian mathematician who lived from 598–668 CE and wrote rules for arithmetic involving zero and negative numbers."
                    color="#8b5cf6"
                >
                    Brahmagupta
                </InlineTooltip>
                {" "}gave zero its own identity as a number — not just an empty placeholder, but a value that could be added, subtracted, and multiplied. He was the first to write rules like "a number multiplied by zero is zero" and "a number plus zero remains unchanged." From India, zero traveled along trade routes to the{" "}
                <InlineTooltip
                    id="tooltip-arabic"
                    tooltip="Arab mathematicians like Al-Khwarizmi adopted the Indian numeral system and spread it throughout the Islamic world during the 8th-9th centuries."
                    color="#3cc499"
                >
                    Islamic world
                </InlineTooltip>
                {" "}and eventually reached Europe through the work of{" "}
                <InlineTooltip
                    id="tooltip-fibonacci"
                    tooltip="Leonardo of Pisa (c. 1170–1250), known as Fibonacci, introduced the Hindu-Arabic numeral system to Europe in his book Liber Abaci (1202)."
                    color="#f59e0b"
                >
                    Fibonacci
                </InlineTooltip>
                {" "}in the 13th century. This seemingly simple idea transformed mathematics forever, eventually enabling everything from algebra to calculus to the binary code that powers modern computers.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
