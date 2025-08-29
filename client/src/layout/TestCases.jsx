import React from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { Separator } from "@radix-ui/react-separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { runCode, submitCode } from "@/lib/api/problem";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";

export default function TestCases({
  problem,
  code,
  setCode,
  language,
  fontSize,
}) {
  if (!problem || !problem.testCases) return <div>Loading test cases...</div>;
  const { id } = useParams();

const visibleTestCases = problem.testCases.filter(tc => !tc.isHidden);


  const [output, setOutput] = useState("");
  const [expected, setExpected] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const [monacoTheme, setMonacoTheme] = useState("vs-dark");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setMonacoTheme(isDark ? "vs-dark" : "vs");

    const observer = new MutationObserver(() => {
      const isDarkNow = document.documentElement.classList.contains("dark");
      setMonacoTheme(isDarkNow ? "vs-dark" : "vs");
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const allPassed =
    status.toLowerCase().includes("accepted") ||
    status.toLowerCase().includes("passed");
  const handleRun = async () => {
    try {
      setIsRunning(true);
      const res = await runCode({ problemId: id, language, code });

      setOutput(res.data.output);
      setExpected(`${res.data.passed}/${res.data.total} test cases passed`);
      setStatus(res.data.result);

    } catch (err) {
      setOutput(err?.response?.data?.message || "Error running code");
      setStatus("Error");
    }finally {
      setIsRunning(false);
    }
  };

  const handleSubmit = async () => {
    console.log("Submit button clicked");
    setIsSubmitting(true);
    try {
      console.log("Submit Payload:", { problemId: id, language, code });

      const res = await submitCode({
        problemId: id,
        language,
        code,
      });

      console.log("Submission response:", res);
      setOutput(res.data.output);
      setExpected(`${res.data.passed}/${res.data.total} test cases passed`);
      setStatus(res.data.result);
    } catch (err) {
      console.error("Error submitting code:", err);
      setOutput(err?.response?.data?.message || "Error submitting code");
      setStatus("Error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full">
      <PanelGroup direction="vertical" className="h-full min-h-0">
        {/* Editor Panel Placeholder */}
        <Panel defaultSize={60}>
          <div className="h-full flex flex-col">
            {/* Editor takes remaining space */}
            <div className="flex-grow overflow-hidden">
              <Editor
                height="100%"
                language={language}
                value={code}
                onChange={(value) => setCode(value || "")}
                theme={monacoTheme}
                options={{
                  fontSize: fontSize,
                  wordWrap: "on",
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                }}
              />
            </div>

            {/* Buttons - fixed at the bottom */}
            <div className="shrink-0 border-t border-border bg-card px-4 py-3 flex justify-end gap-2">
              <Button
                variant="outline"
                className="text-sm px-4"
                onClick={handleRun}
                disabled = {isRunning}

              >
               {isRunning ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    Run
                  </>
                )}{" "}
              </Button>
              <Button
                className="text-sm px-4 flex items-center bg-gray-100 dark:bg-white"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <PlayIcon className="w-4 h-4 mr-1" />
                    Submit
                  </>
                )}{" "}
              </Button>
            </div>
          </div>
        </Panel>

        {/* Resizable Handle */}
        <PanelResizeHandle className="h-2 cursor-row-resize">
          <Separator decorative className="bg-border h-1 w-full" />
        </PanelResizeHandle>

        {/* Test Case & Result Panel */}
        <Panel defaultSize={40}>
          <div className="w-full h-full overflow-y-auto max-h-[500px] flex flex-col bg-card rounded-lg border shadow-inner p-4 space-y-4">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">Test Cases</h3>
              {status && (
                <Badge
                  variant={allPassed ? "default" : "destructive"}
                  className={
                    allPassed
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : ""
                  }
                >
                  {status}
                </Badge>
              )}
            </div>

            {/* Tabs */}
            <Tabs defaultValue="0" className="w-full">
              <TabsList className="flex gap-2 overflow-x-auto scrollbar-hide border-b border-border pb-1 px-2">
                {visibleTestCases.map((_, idx) => (
                  <TabsTrigger
                    key={idx}
                    value={idx.toString()}
                    className="px-4 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 bg-muted/50 hover:bg-muted/70 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                  >
                    Case {idx + 1}
                  </TabsTrigger>
                ))}
              </TabsList>

              {visibleTestCases.map((example, idx) => (
                <TabsContent key={idx} value={idx.toString()} className="mt-4">
                  <div className="grid gap-2 text-sm">
                    <div>
                      <span className="font-medium">Input:</span>{" "}
                      <code className="bg-muted px-2 py-1 rounded">
                        {example.input}
                      </code>
                    </div>
                    <div>
                      <span className="font-medium">Expected Output:</span>{" "}
                      <code className="bg-muted px-2 py-1 rounded">
                        {example.expectedOutput}
                      </code>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            {/* Footer */}
            <div className="mt-3 border-t pt-3 text-sm text-muted-foreground whitespace-pre-wrap">
              <p>
                <strong>Output:</strong>{" "}
                <code>{output || "No output yet"}</code>
              </p>
              <p>
                <strong>Expected:</strong> <code>{expected || "-"}</code>
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`font-semibold ${
                    status === "Accepted"
                      ? "text-green-600"
                      : status === "Failed"
                        ? "text-red-600"
                        : status === "Error"
                          ? "text-yellow-600"
                          : ""
                  }`}
                >
                  {status || "Not run"}
                </span>
              </p>
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}
