import { onGetCurrentDomainInfo } from "@/actions/settings";
import BotTrainingForm from '@/components/forms/settings/bot-training';
import SettingForm from "@/components/forms/settings/form";
import InfoBar from "@/components/infobar";
import { redirect } from "next/navigation";
import React from "react";

type Props = { params: { domain: string } };

const DomainPage = async ({ params }: Props) => {
  const domain = await onGetCurrentDomainInfo(params.domain);
  if (!domain) redirect("/dashboard");
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto px-1 w-full chat-window flex-1 h-0 flex flex-col ">
        <SettingForm
          name={domain.domains[0].name}
          id={domain.domains[0].id}
          chatBot={domain.domains[0].chatBot}
          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
          plan={domain.subscription?.plan!}
        />
        <BotTrainingForm id={domain.domains[0].id} />
      </div>
    </>
  );
};

export default DomainPage;
